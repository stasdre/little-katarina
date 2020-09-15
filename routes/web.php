<?php

use App\Mail\Booking as MailBooking;
use App\Models\Booking;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect(app()->getLocale());
});

Auth::routes();

Route::group(['prefix' => '{locale}', 'where' => ['locale' => '[a-zA-Z]{2}']], function() {

    Route::get('/', function () {
        return view('home');
    })->name('home');

    Route::get('/booking/{year?}/{month?}/{day?}', function () {
        return view('book');
    })->name('book');

    Route::get('/contact-us', function () {
        return view('contact-us');
    })->name('contact');

});

Route::get('/get-booking-dates/{from}/{to}',function($from,$to){
    $data = Booking::select(DB::raw('count(*) as count_dates, date_booking'))->where('date_booking','>=', ''.$from.'')->where('date_booking','<=', ''.$to.'')->havingRaw('count(*) >= ?',[10])->groupBy('date_booking')->get();
    $dataDates = [];
    
    if($data){
        foreach ($data as $value) {
            $dataDates[] = $value['date_booking'];
        }
        return ['status'=>'ok','dates'=>$dataDates];
    }

    return['staus'=>'ok', 'dates'=>[]];
});

Route::post('/booking-time', function(Request $request){

    $data = Booking::where('date_booking', ''.$request->get('date_booking').'')->count();

    if($data<10){
        $dataBook = Booking::insert($request->all());
        if($dataBook){
            Mail::send(new MailBooking($request->all()));
            return ['staus'=>'ok'];
        }

        return ['staus'=>'error'];
    }
    
    return ['staus'=>'error'];
});

Route::group(['prefix'=>'admin'],function(){
    Route::middleware(['auth'])->group(function () {
        Route::get('/',function(){
            return view('admin');
        });
        Route::post('/set-booking/{date}',function($date){
            $insertData = [];
            for ($i=0; $i < 10; $i++) { 
                $insertData[] = ['date_booking'=>$date, 'name'=>'admin'];
            }

            $data = DB::table('bookings')->insert($insertData);
            
            if($data){
                return ['status'=>'ok','date'=>$date];
            }

            return['staus'=>'error'];
        });
        Route::post('/uncheck-booking/{date}',function($date){
            $data = Booking::where('date_booking', $date)->delete();

            if($data){
                return ['status'=>'ok','date'=>$date];
            }

            return['staus'=>'error'];
        });

        Route::get('/get-booking/{from}/{to}',function($from,$to){
            $data = Booking::select('date_booking')->where('date_booking','>=', ''.$from.'')->where('date_booking','<=', ''.$to.'')->where('name','admin')->groupBy('date_booking')->get();
            $dataDates = [];
            
            if($data){
                foreach ($data as $value) {
                    $dataDates[] = $value['date_booking'];
                }
                return ['status'=>'ok','dates'=>$dataDates];
            }

            return['staus'=>'ok', 'dates'=>[]];
        });
    });
});

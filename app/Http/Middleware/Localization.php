<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Localization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {   
        $locale = $request->segment(1);

        // if($locale && !in_array($locale, config('app.langs'))){
        //     abort(404);
        // }

        if(!$locale){
            $locale = substr($request->server('HTTP_ACCEPT_LANGUAGE'), 0, 2);
        }

        if (! in_array($locale, config('app.langs'))) {
            $locale = 'en';
        }
        
        app()->setLocale($locale);

        return $next($request);
    }
}

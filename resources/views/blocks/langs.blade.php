<ul class="langs__list">
<li class="langs__item {{app()->getLocale() === 'en' ? "langs__item_active" : ""}}"><a class="langs__link" href="{{ route(Route::currentRouteName(), 'en') }}">
        <svg class="langs__ikon">
            <use xlink:href="/images/icons/sprite.svg#English"></use>
        </svg></a></li>
    <li class="langs__item {{app()->getLocale() === 'ar' ? "langs__item_active" : ""}}"><a class="langs__link" href="{{ route(Route::currentRouteName(), 'ar') }}">
        <svg class="langs__ikon">
            <use xlink:href="/images/icons/sprite.svg#Dubai"></use>
        </svg></a></li>
    <li class="langs__item {{app()->getLocale() === 'de' ? "langs__item_active" : ""}}"><a class="langs__link" href="{{ route(Route::currentRouteName(), 'de') }}">
        <svg class="langs__ikon">
            <use xlink:href="/images/icons/sprite.svg#German"></use>
        </svg></a></li>
    <li class="langs__item {{app()->getLocale() === 'he' ? "langs__item_active" : ""}}"><a class="langs__link" href="{{ route(Route::currentRouteName(), 'he') }}">
        <svg class="langs__ikon">
            <use xlink:href="/images/icons/sprite.svg#Israel"></use>
        </svg></a></li>
</ul>
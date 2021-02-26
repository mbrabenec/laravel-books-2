<nav class="top-menu">

    <a {!! $current === 'books' ? 'class="current"' : '' !!} href="{{ action('BookController@index') }}">Books</a>
    <a {!! $current === 'publishers' ? 'class="current"' : '' !!} href="{{ action('PublisherController@index') }}">Publishers</a>
    <a {!! $current === 'bookshops' ? 'class="current"' : '' !!} href="{{ action('BookshopController@index') }}">Bookshops</a>

    <div class="user-info">

        @auth
            Logged in as {{ Auth::user()->name }}

            <form action="{{ route('logout') }}" method="post">
                @csrf
                <input type="submit" value="Logout">
            </form>

            @can('admin')

                <strong>You are an administrator</strong>

            @endcan

        @else

            <a href="{{ route('login') }}">Log in</a>

        @endauth

    </div>

</nav>
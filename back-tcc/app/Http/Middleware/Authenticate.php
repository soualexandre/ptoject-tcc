<?php

namespace App\Http\Middleware;
use Illuminate\Contracts\Auth\Guard;
use Auth;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
    //Log::info("ajax:".$request->ajax());
		//Log::info("guest:".$this->auth->guest());
		if ($this->auth->guest())
		{
			if ($request->ajax() || $request->wantsJson())
			{
				return response('Unauthorized.', 401);
			}
			else
			{
				return redirect()->guest('auth/login');
			}
		}

		return $next($request);
	}
}

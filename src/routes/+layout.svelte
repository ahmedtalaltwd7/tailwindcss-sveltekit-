<script>
    import "../app.css";
    import { Toaster } from 'svelte-french-toast';
  </script>
<Toaster />

  <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-2  sticky w-full z-10 top-0 rounded-lg">
      <div class="flex items-center flex-shrink-0 text-white  text-center">
        <a class="text-white no-underline hover:text-white hover:no-underline" href="/slider">
          <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
              <span>AT</span>
            </div>
          </div> 
        </a>
      </div>
      <div class="block lg:hidden">
        
        <button id="nav-toggle" class="flex  items-center px-3 py-2 border rounded text-zinc-100 border-zinc-100 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>قائمة</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
    
      <div class="w-full   lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
        <ul class="list-reset lg:flex justify-center flex-1 items-center">
          <li class="m-1 text-red-50 ">
            <a class="inline-block py-2 px-4 text-white hover:bg-gray-50 rounded-lg" href="/">home</a>
          </li>
          <li class="mr-1 text-center">
            <a  class="inline-block text-zinc-100 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/slider">slider</a>
          </li>
          <li class="mr-1 text-center">
            <a  class="inline-block text-zinc-100 no-underline hover:text-gray-200 hover:text-underline py-1 px-4" href="/sw">sw</a>
          </li>
          <li class="mr-1 text-center">
            <a class="inline-block text-zinc-100 no-underline hover:text-gray-200 hover:text-underline py-1 px-4" href="/login">login</a>
          </li>
          <li class="mr-1 text-center">
            <a class="inline-block text-zinc-100 no-underline hover:text-gray-200 hover:text-underline py-1 px-4" href="/headslider">headslider</a>
          </li>
          <li class="mr-1 text-center">
            <a class="inline-block text-zinc-100 no-underline hover:text-gray-200 hover:text-underline py-1 px-4" href="#">link</a>
          </li>
          <li class="mr-1 text-center">
            <a class="inline-block text-zinc-100 no-underline hover:text-gray-200 hover:text-underline py-1 px-4" href="#">link</a>
          </li>
          <li class="mr-1 text-center">
            <a class="inline-block text-zinc-100 no-underline hover:text-gray-200 hover:text-underline py-1 px-4" href="#">link</a>
          </li>
          <li class="mr-1 text-center">
            <a class="inline-block text-zinc-100 no-underline hover:text-gray-200 hover:text-underline py-1 px-4" href="#">link</a>
          </li>
          <li class="mr-1 text-center">
            <a class="inline-block text-zinc-100 no-underline hover:text-gray-200 hover:text-underline py-1 px-4" href="#">link</a>
          </li>
          <li class="mr-1 text-center">
            <a class="inline-block text-zinc-100 no-underline hover:text-gray-200 hover:text-underline py-1 px-4" href="#">link</a>
          </li>
          <li class="mr-1 text-center">
            <a class="inline-block text-zinc-100 no-underline hover:text-gray-200 hover:text-underline py-1 px-4" href="#">link</a>
          </li>
          <li class="mr-1 text-center">
            <a class="inline-block text-zinc-100 no-underline hover:text-gray-200 hover:text-underline py-1 px-4" href="#">link</a>
          </li>
        </ul>
      </div>
   
    
    </nav>
  <slot />
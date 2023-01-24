
<script>
  import toast from 'svelte-french-toast'

toast.error('Title cannot be blank!');
toast.success('Note added!');
</script>


<svelte:head>

<script src="./js.js"></script>
</svelte:head>

<div class="relative min-h-screen md:flex">

    <!-- mobile menu bar -->
    <div class="bg-gray-800 text-gray-100 flex justify-between items-center md:hidden">
    
  
        <a href="#" class="block p-4 text-white font-bold"> ALEF </a>
    
          <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
    </div>
  
    <!-- sidebar -->
  
    <div class="sidebar bg-gray-100 text-gray-900 w-64 px-2 space-y-6 py-4 absolute md:relative md:translate-x-0 inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out">
  
      <!-- logo -->
      <a href="#" class="text-gray-900 flex items-center px-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <span class="text-2xl font-bold px-2">ALEF</span>
      </a>
      <!-- nav -->
      <button class="mobile-menu-button ">
       ****
      </button>
      <nav>
        
        <a href="" class="block py-2 px-4 rounded hover:bg-gray-200 transition duration-200">About</a>
        <a href="" class="block py-2 px-4 rounded hover:bg-gray-200 transition duration-200">Bags</a>
        <a href="" class="block py-2 px-4 rounded hover:bg-gray-200 transition duration-200">Accessories</a>
        <a href="" class="block py-2 px-4 rounded hover:bg-gray-200 transition duration-200">Materials</a>
        <a href="" class="block py-2 px-4 rounded hover:bg-gray-200 transition duration-200">Contact</a>
  
      </nav>
  
    </div>
  
    <!-- content -->
    <div class="flex-1 p-10 text-2xl font-bold bg-yellow-300">
        <div class="2xl:container 2xl:mx-auto bg-yellow-200 px-2">

            <nav class="flex items-center justify-between flex-wrap bg-green-500 p-4 text-center">
              <div class="flex items-center flex-shrink-0 text-white mr-6">
                <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
              </div>
              <div class="block lg:hidden">
                <button id='boton' class="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white">
                  <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
              </div>
              <div id='menu' class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                  <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4">
                    Docs
                  </a>
                  <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4">
                    Examples
                  </a>
                  <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white">
                    Blog
                  </a>
                </div>
                <div>
                  <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0">Download</a>
                </div>
              </div>
            </nav>
            
          
            
              <h1 class="twd font-[Freehand] text-5xl  ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, neque incidunt natus consequuntur pariatur minima, earum quas quaerat iste ratione nihil ea eum quo possimus ducimus iure consequatur delectus nemo!</h1>
              <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
              <h1 class="twd">twd</h1> 
              
              <h1 class="text-3xl font-bold underline">
                  Hello world!
                </h1>
              
                <div class="text-right px-2 text-2xl">
          
                        احمد طلال محسن
                      </div>
                   <!-- <div class=" bg-orange-300 relative">
          
          
                    <div class=" w-3/12 bg-lime-300 right-0  top-0  absolute">
                      <div class=" w-full bg-red-600 h-24"> .....................................</div>
                    </div>
          
          
          
                      <div class=" w-3/5 flex flex-wrap gap-y-4  bg-gray-500">
                        <div class=" w-full p-10  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-red-600"> lllllllllllllll</div>
                        <div class=" w-full  p-10 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-orange-600"> lllllllllllllll</div>
                        <div class=" w-full	 p-10 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-red-600"> lllllllllllllll</div>
                        <div class=" w-full	 p-10 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-orange-600"> lllllllllllllll</div>
                      </div>
          
          
                      
                    
            
                    </div> -->
          
          
          
          
          
            <div class=" w-3/12 grid grid-cols-1 bg-gray-400 sm:w-full sm2:w-full md:w-1/4 md2:w-1/4 lg:w-1/4 xl:w-1/4">
            
            
          
          
              </div>
           <!-- <div class=" w-9/12 grid grid-cols-4  bg-red-400">
          
            <div class="col-span-3">
          
           <div class="  flex flex-wrap  bg-gray-500 gap-1 ">
            <div class=" w-full p-10  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-red-600"> lllllllllllllll</div>
            <div class=" w-full  p-10 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-orange-600"> lllllllllllllll</div>
            <div class=" w-full	 p-10 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-red-600"> lllllllllllllll</div>
            <div class=" w-full	 p-10 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-orange-600"> lllllllllllllll</div>
           </div>
           </div>  
           </div> -->
          
          
          
          
           
           <div class=" bg-red-500  xl:w-48 lg:w-52 md:w-44 sm:w-full sm2:w-full   rounded-lg order-first p-3">
            <a href="" class="block py-2 px-4 rounded hover:bg-gray-200 transition duration-200">About</a>
                <a href="" class="block py-2 px-4 rounded hover:bg-gray-200 transition duration-200">Bags</a>
                <a href="" class="block py-2 px-4 rounded hover:bg-gray-200 transition duration-200">Accessories</a>
                <a href="" class="block py-2 px-4 rounded hover:bg-gray-200 transition duration-200">Materials</a>
                <a href="" class="block py-2 px-4 rounded hover:bg-gray-200 transition duration-200">Contact</a>
               </div>
          
           <div class=" w-full  bg-red-400 items-center">
             <div class=" flex flex-wrap  ">
          
           
          
              <div class="  w-9/12 col-span-2 bg-stone-400 ">
                <div class="  flex flex-wrap  bg-gray-500  gap-3  justify-center">
                  <div class="card w-80 bg-base-100 shadow-xl hover:bg-red-500 transition-colors duration-500  xl:w-80 lg:w-80 md:w-80  sm:w-full sm2:w-full">
                 
                    
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          
                    <div class="card-body">
                      <div class="rating rating-sm">
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                      </div>
                      <h2 class="card-title">
                        Shoes!
                        <div class="badge badge-secondary">NEW</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <div class="badge badge-outline">Fashion</div> 
                        <div class="badge badge-outline">Products</div>
                      </div>
                    </div>
                  </div>
                  <div class=" w-full p-10 xl:w-80 lg:w-80 md:w-80 sm:w-full sm2:w-full bg-red-600 rounded-lg drop-shadow-xl hover:bg-red-500 transition-colors duration-500  "> llllllkkklllllllll</div>
                  <div class=" w-full p-10 xl:w-80 lg:w-80 md:w-80 sm:w-full sm2:w-full bg-red-600 rounded-lg drop-shadow-xl hover:bg-red-500 transition-colors duration-500  "> llllllkkklllllllll</div>
                  <div class=" w-full p-10 xl:w-80 lg:w-80 md:w-80 sm:w-full sm2:w-full bg-red-600 rounded-lg drop-shadow-xl hover:bg-red-500 transition-colors duration-500  "> llllllkkklllllllll</div>
                  <div class=" w-full p-10 xl:w-80 lg:w-80 md:w-80 sm:w-full sm2:w-full bg-red-600 rounded-lg drop-shadow-xl hover:bg-red-500 transition-colors duration-500  "> llllllkkklllllllll</div>
                  <div class=" w-full p-10 xl:w-80 lg:w-80 md:w-80 sm:w-full sm2:w-full bg-red-600 rounded-lg drop-shadow-xl hover:bg-red-500 transition-colors duration-500  "> llllllkkklllllllll</div>
                  <div class=" w-full p-10 xl:w-80 lg:w-80 md:w-80 sm:w-full sm2:w-full bg-red-600 rounded-lg drop-shadow-xl hover:bg-red-500 transition-colors duration-500  "> llllllkkklllllllll</div>
                  <div class=" w-full p-10 xl:w-80 lg:w-80 md:w-80 sm:w-full sm2:w-full bg-red-600 rounded-lg drop-shadow-xl hover:bg-red-500 transition-colors duration-500 "> llllllkkklllllllll</div>
                  <div class=" w-full p-10 xl:w-80 lg:w-80 md:w-80 sm:w-full sm2:w-full bg-red-600 rounded-lg drop-shadow-xl hover:bg-red-500 transition-colors duration-500 "> llllllkkklllllllll</div>
                 </div>
                 <div class="btn-group">
                  <button class="btn btn-xs">1</button>
                  <button class="btn btn-xs btn-active">2</button>
                  <button class="btn btn-xs">3</button>
                  <button class="btn btn-xs">4</button>
                </div>
              </div>
           ffffffffffffffffffffffffff
             </div>
          ffffffffffffffffffffffff
            </div>
          
          
          
          
          
          
          
          
          
          
           <footer class="footer p-10 bg-neutral text-neutral-content">
            <div>
              <span class="footer-title">Services</span> 
              <a class="link link-hover">Branding</a>
              <a class="link link-hover">Design</a>
              <a class="link link-hover">Marketing</a>
              <a class="link link-hover">Advertisement</a>
            </div> 
            <div>
              <span class="footer-title">Company</span> 
              <a class="link link-hover">About us</a>
              <a class="link link-hover">Contact</a>
              <a class="link link-hover">Jobs</a>
              <a class="link link-hover">Press kit</a>
            </div> 
            <div>
              <span class="footer-title">Legal</span> 
              <a class="link link-hover">Terms of use</a>
              <a class="link link-hover">Privacy policy</a>
              <a class="link link-hover">Cookie policy</a>
            </div>
           </footer>
          
          </div>
          
          
          <!-- <div class=" w-auto bg-orange-600">
            <div class="card w-60 bg-base-100 shadow-xl">
              <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">
                  Shoes!
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div> 
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          
          
          </div> -->
          
             <!-- <div class="card w-60 bg-base-100 shadow-xl">
              <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">
                  Shoes!
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div> 
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
           
            </div> -->
    </div>
  
  </div>
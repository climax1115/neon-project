Vue.component("navbar-template", {
  template: `<div>

  <aside id="sidebar" class="sidebar hidden">
    <div class="sidebar-start">
        <div class="sidebar-head">
            <a href="/" class="logo-wrapper" title="Home">
                <span class="sr-only">Home</span>
                <img class="logo" src="img/n.svg" width="auto">
            </a>
            <input class="logo-wrapper" type="text" placeholder="Search..." />
            <svg class="icon sidebar-toggle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path d="M3 5h8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12h13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19h18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        
        </div>
        <div class="sidebar-body">
            <ul class="sidebar-body-menu">
                <li class="sidebar-toggle close">
                    <router-link to="/">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path d="M9 21H7a4 4 0 0 1-4-4v-6.292a4 4 0 0 1 1.927-3.421l5-3.03a4 4 0 0 1 4.146 0l5 3.03A4 4 0 0 1 21 10.707V17a4 4 0 0 1-4 4h-2m-6 0v-4a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m-6 0h6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                     Apps</router-link>
                </li>
                <li class="sidebar-toggle close">
                    <router-link to="/portfolio">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"/><path d="m3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"/></g></svg>
                  Portfolio</router-link>
                </li>
                <li class="sidebar-toggle">
                    <a  class="mbtn" href="#">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path d="M7 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 9V5.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6V9M2 9v9.4a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6V9M2 9h20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                     Deposit</a>
                </li>
                <li class="sidebar-toggle close">
                    <router-link to="/swap">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path d="M17 20V4m0 0l3 3m-3-3l-3 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 4v16m0 0l3-3m-3 3l-3-3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                     Swap</router-link>
                </li>
                <li class="sidebar-toggle close">
                    <router-link to="/lending">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path d="M11.456 2.665a.6.6 0 0 1 1.088 0l2.864 6.137a.6.6 0 0 0 .29.29l6.137 2.864a.6.6 0 0 1 0 1.088l-6.137 2.864a.6.6 0 0 0-.29.29l-2.864 6.137a.6.6 0 0 1-1.088 0l-2.864-6.137a.6.6 0 0 0-.29-.29l-6.137-2.864a.6.6 0 0 1 0-1.088l6.137-2.864a.6.6 0 0 0 .29-.29l2.864-6.137z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                     Lending</router-link>
                </li>
                <li class="sidebar-toggle close">
                    <router-link to="/pool">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path d="M3 10c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.965-3 4.965-3s2.483 3 4.345 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 17c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.965-3 4.965-3s2.483 3 4.345 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                     Pool</router-link>
                </li>
               

            </ul>

        </div>
    </div>

  </aside>

  <div id="Modal" class="modal">
  <div class="modal-content">
  <span class="close"></span>
    <iframe
      src="https://widget.onramper.com?color=266678&apiKey=pk_prod_URniJGyGZZ03yNLQL1gNrlpRZLrNxuHhB0MGUDtzDWg0&"
      allow="accelerometer; autoplay; camera; gyroscope; payment"
      width="100%"
      height="100%"
      frameborder="0"
      />
    </iframe>
  </div>

  </div>

   <nav class="mnav ">
      <ul id="a">
        <li class="close">
          <router-link to="/">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path d="M9 21H7a4 4 0 0 1-4-4v-6.292a4 4 0 0 1 1.927-3.421l5-3.03a4 4 0 0 1 4.146 0l5 3.03A4 4 0 0 1 21 10.707V17a4 4 0 0 1-4 4h-2m-6 0v-4a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m-6 0h6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
          </router-link>
        
        </li>
        <li>
         <router-link to="//" class="mbtn">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path d="M7 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 9V5.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6V9M2 9v9.4a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6V9M2 9h20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
          </router-link>
        </li>
        <li class="close">
          <router-link to="/lending">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path d="M11.456 2.665a.6.6 0 0 1 1.088 0l2.864 6.137a.6.6 0 0 0 .29.29l6.137 2.864a.6.6 0 0 1 0 1.088l-6.137 2.864a.6.6 0 0 0-.29.29l-2.864 6.137a.6.6 0 0 1-1.088 0l-2.864-6.137a.6.6 0 0 0-.29-.29l-6.137-2.864a.6.6 0 0 1 0-1.088l6.137-2.864a.6.6 0 0 0 .29-.29l2.864-6.137z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
          </router-link>
        </li>

        <li class="close">
          <router-link to="/portfolio">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"/><path d="m3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"/></g></svg>
          </router-link>
        </li>
         <li>
          <svg class="icon sidebar-toggle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path d="M3 5h8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12h13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 19h18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        </li>
      </ul>
  </nav>


  
</div>`,


  mounted() {},
  methods: {}
})

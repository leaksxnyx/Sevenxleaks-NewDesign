@@ .. @@
           {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center space-x-4">
             <Link
               to="/"
-              className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent ${themeClasses.border} ${themeClasses.glow} ${
+              className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent ${themeClasses.border} ${themeClasses.glow} ${
                 isDark 
                   ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                   : 'text-gray-800 hover:text-black hover:bg-gray-100/50'
               }`}
             >
-              <span className="relative z-10 font-medium font-roboto text-sm">Home</span>
+              <span className="relative z-10 font-medium font-roboto text-xs">Home</span>
               <div className={`absolute inset-0 ${themeClasses.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
             </Link>
 
             <Link 
               to="/banned" 
-              className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent border-slate-500/20 shadow-slate-500/20 ${
+              className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-slate-500/20 hover:shadow-slate-500/20 ${
                 isDark 
                   ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                   : 'text-gray-800 hover:text-black hover:bg-gray-100/50'
               }`}
             >
-              <span className="relative z-10 font-medium font-roboto text-sm flex items-center gap-2">
+              <span className="relative z-10 font-medium font-roboto text-xs flex items-center gap-1">
                 <i className={`fa-solid fa-ban text-xs ${
                   isDark ? 'text-slate-400' : 'text-slate-500'
                 }`}></i>
                 Banned
               </span>
               <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
             </Link>
 
             <Link 
               to="/unknown" 
-              className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent border-gray-500/20 shadow-gray-500/20 ${
+              className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-gray-500/20 hover:shadow-gray-500/20 ${
                 isDark 
                   ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                   : 'text-gray-800 hover:text-black hover:bg-gray-100/50'
               }`}
             >
-              <span className="relative z-10 font-medium font-roboto text-sm flex items-center gap-2">
+              <span className="relative z-10 font-medium font-roboto text-xs flex items-center gap-1">
                 <i className={`fa-solid fa-question text-xs ${
                   isDark ? 'text-gray-400' : 'text-gray-500'
                 }`}></i>
                 Unknown
               </span>
               <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
             </Link>
 
             <Link 
               to="/plans" 
-              className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent border-slate-500/20 shadow-slate-500/20 ${
+              className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-slate-500/20 hover:shadow-slate-500/20 ${
                 isDark 
                   ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                   : 'text-gray-800 hover:text-black hover:bg-gray-100/50'
               }`}
             >
-              <span className="relative z-10 font-medium font-roboto text-sm flex items-center gap-2">
+              <span className="relative z-10 font-medium font-roboto text-xs flex items-center gap-1">
                 <i className={`fa-solid fa-crown text-xs ${
                   isDark ? 'text-slate-400' : 'text-slate-500'
                 }`}></i>
                 Plans
               </span>
               <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
             </Link>
 
             <a 
               href="https://discord.gg/95BKaYTPPS"
               target="_blank"
               rel="noopener noreferrer"
-              className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent border-slate-500/20 shadow-slate-500/20 ${
+              className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-slate-500/20 hover:shadow-slate-500/20 ${
                 isDark 
                   ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                   : 'text-gray-800 hover:text-black hover:bg-gray-100/50'
               }`}
             >
-              <span className="relative z-10 font-medium font-roboto text-sm flex items-center gap-2">
+              <span className="relative z-10 font-medium font-roboto text-xs flex items-center gap-1">
                 <i className={`fab fa-discord text-xs ${
                   isDark ? 'text-slate-400' : 'text-slate-500'
                 }`}></i>
                 Discord
               </span>
               <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
             </a>
 
             <Link 
               to="/login" 
-              className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent ${themeClasses.border} ${themeClasses.glow} ${
+              className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent ${themeClasses.border} ${themeClasses.glow} ${
                 isDark 
                   ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                   : 'text-gray-800 hover:text-black hover:bg-gray-100/50'
               }`}
             >
-              <span className="relative z-10 font-medium font-roboto text-sm">Login</span>
+              <span className="relative z-10 font-medium font-roboto text-xs">Login</span>
               <div className={`absolute inset-0 ${themeClasses.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
             </Link>
           </nav>
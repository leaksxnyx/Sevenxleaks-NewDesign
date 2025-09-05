@@ .. @@
           {/* Desktop Navigation */}
           <nav className="hidden lg:flex items-center space-x-4">
             <Link
               to="/"
-              className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent ${
+              className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:${themeClasses.border} hover:${themeClasses.glow} ${
                 isDark 
                   ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                   : 'text-gray-800 hover:text-black hover:bg-gray-100/50'
               }`}
             >
-              <span className="relative z-10 font-medium font-['Roboto'] text-sm">Home</span>
+              <span className="relative z-10 font-medium font-['Roboto'] text-xs">Home</span>
               <div className={`absolute inset-0 bg-gradient-to-r ${themeClasses.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
             </Link>
 
             <Link
               to="/banned"
-              className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-slate-500/20 hover:shadow-slate-500/20 ${
+              className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-slate-500/20 hover:shadow-slate-500/20 ${
                 isDark 
                   ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                   : 'text-gray-800 hover:text-black hover:bg-gray-100/50'
               }`}
             >
-              <span className="relative z-10 font-medium font-['Roboto'] text-sm flex items-center gap-2">
+              <span className="relative z-10 font-medium font-['Roboto'] text-xs flex items-center gap-1">
                 <i className={`fa-solid fa-ban text-xs ${
                   isDark ? 'text-slate-400' : 'text-slate-500'
                 }`} />
                 Banned
               </span>
               <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
             </Link>
 
             <Link
               to="/unknown"
-              className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-gray-500/20 hover:shadow-gray-500/20 ${
+              className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-gray-500/20 hover:shadow-gray-500/20 ${
                 isDark 
                   ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                   : 'text-gray-800 hover:text-black hover:bg-gray-100/50'
               }`}
             >
-              <span className="relative z-10 font-medium font-['Roboto'] text-sm flex items-center gap-2">
+              <span className="relative z-10 font-medium font-['Roboto'] text-xs flex items-center gap-1">
                 <i className={`fa-solid fa-question text-xs ${
                   isDark ? 'text-gray-400' : 'text-gray-500'
                 }`} />
                 Unknown
               </span>
               <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
             </Link>
 
             {!isVip && (
               <Link
                 to="/plans"
-                className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-slate-500/20 hover:shadow-slate-500/20 ${
+                className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-slate-500/20 hover:shadow-slate-500/20 ${
                   isDark 
                     ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                     : 'text-gray-800 hover:text-black hover:bg-gray-100/50'
                 }`}
               >
-                <span className="relative z-10 font-medium font-['Roboto'] text-sm flex items-center gap-2">
+                <span className="relative z-10 font-medium font-['Roboto'] text-xs flex items-center gap-1">
                   <i className={`fa-solid fa-crown text-xs ${
                     isDark ? 'text-slate-400' : 'text-slate-500'
                   }`} />
                   Plans
                 </span>
                 <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
               </Link>
             )}
 
             <a
               href="https://discord.gg/95BKaYTPPS"
               target="_blank"
               rel="noopener noreferrer"
-              className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-slate-500/20 hover:shadow-slate-500/20 ${
+              className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-slate-500/20 hover:shadow-slate-500/20 ${
                 isDark 
                   ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                   : 'text-gray-800 hover:text-black hover:bg-gray-100/50'
               }`}
             >
-              <span className="relative z-10 font-medium font-['Roboto'] text-sm flex items-center gap-2">
+              <span className="relative z-10 font-medium font-['Roboto'] text-xs flex items-center gap-1">
                 <i className={`fab fa-discord text-xs ${
                   isDark ? 'text-slate-400' : 'text-slate-500'
                 }`} />
                 Discord
               </span>
               <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
             </a>
 
             {isAdmin && (
               <>
                 <Link
                   to="/admin/settings"
-                  className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-red-500/20 hover:shadow-red-500/20 ${
+                  className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-red-500/20 hover:shadow-red-500/20 ${
                     isDark 
                       ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                       : 'text-gray-800 hover:text-black hover:bg-gray-100/50'
                   }`}
                 >
-                  <span className="relative z-10 font-medium font-['Roboto'] text-sm flex items-center gap-2">
+                  <span className="relative z-10 font-medium font-['Roboto'] text-xs flex items-center gap-1">
                     <i className={`fa-solid fa-shield-halved text-sm ${
                       isDark ? 'text-red-400' : 'text-red-500'
                     }`} />
                     Admin
                   </span>
                   <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
                 </Link>
                 <Link
                   to="/admin/stats"
-                  className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-green-500/20 hover:shadow-green-500/20 ${
+                  className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-green-500/20 hover:shadow-green-500/20 ${
                     isDark 
                       ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                       : 'text-gray-800 hover:text-black hover:bg-gray-100/50'
                   }`}
                 >
-                  <span className="relative z-10 font-medium font-['Roboto'] text-sm flex items-center gap-2">
+                  <span className="relative z-10 font-medium font-['Roboto'] text-xs flex items-center gap-1">
                     <i className={`fa-solid fa-chart-line text-sm ${
                       isDark ? 'text-green-400' : 'text-green-500'
                     }`} />
                     Stats
                   </span>
                   <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
                 </Link>
               </>
             )}
           </nav>
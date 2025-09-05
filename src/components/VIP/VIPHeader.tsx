@@ .. @@
           {/* Desktop VIP Navigation */}
           <nav className="hidden lg:flex items-center space-x-4">
             {allMenuItems
               .filter(item => !item.external)
               .map((item) => (
                 <Link
                   key={item.name}
                   to={item.path}
-                  className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent ${
+                  className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-yellow-500/30 hover:shadow-yellow-500/20 ${
                     isDark
                       ? "text-gray-300 hover:text-yellow-300 hover:bg-yellow-500/10 hover:border-yellow-500/30 hover:shadow-yellow-500/20"
                       : "text-gray-700 hover:text-yellow-700 hover:bg-yellow-100/50 hover:border-yellow-400/40 hover:shadow-yellow-400/10"
                   }`}
                 >
-                  <span className="relative z-10 font-medium font-roboto text-sm flex items-center gap-2">
+                  <span className="relative z-10 font-medium font-roboto text-xs flex items-center gap-1">
                     <i className={`${item.icon} text-yellow-400 text-xs`}></i>
                     {item.name}
                   </span>
                   <div
                     className={`absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 ${
                       isDark
                         ? "bg-yellow-500/10"
                         : "bg-yellow-200/30"
                     }`}
                   ></div>
                 </Link>
               ))}
             {allMenuItems
               .filter(item => item.external)
               .map((item) => (
                 <a
                   key={item.name}
                   href={item.path}
                   target="_blank"
                   rel="noopener noreferrer"
-                  className={`relative px-4 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent ${
+                  className={`relative px-3 py-2 transition-all duration-300 group rounded-lg backdrop-blur-sm border border-transparent hover:border-yellow-500/30 hover:shadow-yellow-500/20 ${
                     isDark
                       ? "text-gray-300 hover:text-yellow-300 hover:bg-yellow-500/10 hover:border-yellow-500/30 hover:shadow-yellow-500/20"
                       : "text-gray-700 hover:text-yellow-700 hover:bg-yellow-100/50 hover:border-yellow-400/40 hover:shadow-yellow-400/10"
                   }`}
                 >
-                  <span className="relative z-10 font-medium font-roboto text-sm flex items-center gap-2">
+                  <span className="relative z-10 font-medium font-roboto text-xs flex items-center gap-1">
                     <i className={`${item.icon} text-yellow-400 text-xs`}></i>
                     {item.name}
                   </span>
                   <div
                     className={`absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 ${
                       isDark
                         ? "bg-yellow-500/10"
                         : "bg-yellow-200/30"
                     }`}
                   ></div>
                 </a>
               ))}
           </nav>
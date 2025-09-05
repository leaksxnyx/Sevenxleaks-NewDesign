@@ .. @@
       <AnimatePresence>
         {isMenuOpen && (
           <motion.div
-            className="absolute right-0 mt-4 w-72 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-yellow-500/30 overflow-hidden"
+            className={`absolute right-0 mt-2 w-64 backdrop-blur-xl rounded-xl shadow-2xl border overflow-hidden ${
+              isDark ? 'bg-gray-900/95 border-yellow-500/30' : 'bg-white/95 border-yellow-400/40'
+            }`}
             initial={{ opacity: 0, scale: 0.95, y: -10 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.95, y: -10 }}
             transition={{ duration: 0.2, ease: "easeOut" }}
           >
             {/* VIP Header do Menu */}
-            <div className="p-4 bg-gradient-to-br from-yellow-900/60 via-yellow-800/40 to-gray-900/80 border-b border-yellow-500/30">
+            <div className={`p-3 border-b ${
+              isDark 
+                ? 'bg-gradient-to-br from-yellow-900/60 via-yellow-800/40 to-gray-900/80 border-yellow-500/30'
+                : 'bg-gradient-to-br from-yellow-100/60 via-yellow-200/40 to-gray-100/80 border-yellow-400/40'
+            }`}>
               <div className="flex items-center gap-4">
                 <div className="relative max-w-10">
-                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg ring-1 ring-yellow-400/30">
+                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg ring-1 ring-yellow-400/30">
                     <i className="fa-solid fa-user text-black text-sm font-bold"></i>
                   </div>
                   
                   {/* VIP Crown */}
-                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center shadow-md ring-1 ring-yellow-300/50">
+                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center shadow-md ring-1 ring-yellow-300/50">
                     <Crown className="w-3 h-3 text-black animate-pulse" />
                   </div>
                   
                   {isAdmin && (
-                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md ring-1 ring-red-500/40">
+                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md ring-1 ring-red-500/40">
                       <Shield className="w-2 h-2 text-white" />
                     </div>
                   )}
                 </div>
                 
                 <div className="flex-1">
-                  <p className="font-bold text-yellow-200 text-base font-['Roboto]">{name}</p>
+                  <p className={`font-bold text-sm font-['Roboto'] ${
+                    isDark ? 'text-yellow-200' : 'text-yellow-800'
+                  }`}>{name}</p>
                   <div className="flex flex-wrap items-center gap-2 mt-2">
-                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400/30 to-yellow-500/30 text-yellow-300 rounded-full text-xs font-bold border border-yellow-400/40 backdrop-blur-sm">
+                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold border backdrop-blur-sm ${
+                      isDark 
+                        ? 'bg-gradient-to-r from-yellow-400/30 to-yellow-500/30 text-yellow-300 border-yellow-400/40'
+                        : 'bg-gradient-to-r from-yellow-200/50 to-yellow-300/50 text-yellow-700 border-yellow-400/50'
+                    }`}>
                       <Crown className="w-3 h-3 animate-pulse" />
                       VIP PREMIUM
                     </span>
                     {isAdmin && (
-                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-400 rounded-full text-xs font-bold border border-red-500/30 backdrop-blur-sm">
+                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold border backdrop-blur-sm ${
+                        isDark 
+                          ? 'bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-400 border-red-500/30'
+                          : 'bg-gradient-to-r from-red-100/50 to-red-200/50 text-red-700 border-red-400/50'
+                      }`}>
                         <Shield className="w-3 h-3" />
                         ADMIN
                       </span>
                     )}
                   </div>
                 </div>
               </div>
             </div>
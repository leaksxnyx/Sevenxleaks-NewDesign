@@ .. @@
       <AnimatePresence>
         {isMenuOpen && (
           <motion.div
-            className={`absolute right-0 mt-2 w-56 rounded-xl shadow-xl border overflow-hidden 
+            className={`absolute right-0 mt-2 w-64 rounded-xl shadow-xl border overflow-hidden 
               ${isDark 
                 ? "bg-gray-900/95 border-gray-700/50" 
                 : "bg-white border-gray-200"}`
             }
             initial={{ opacity: 0, scale: 0.95, y: -10 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.95, y: -10 }}
             transition={{ duration: 0.2, ease: "easeOut" }}
           >
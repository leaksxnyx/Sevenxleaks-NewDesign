@@ .. @@
           {/* Add/Edit Form */}
           <div className={`p-6 border-b ${isDark ? "border-gray-700/50" : "border-gray-200/50"}`}>
-
+            <AdminLinkForm
+              newLink={newLink}
+              setNewLink={setNewLink}
+              categories={categories}
+              isEditing={isEditing}
+              setIsEditing={setIsEditing}
+              handleAddLink={handleAddLink}
+              handleUpdateLink={handleUpdateLink}
+              isLoading={isLoading}
+            />
           </div>
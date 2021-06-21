class ConvertDatabaseToUtf8mb4 < ActiveRecord::Migration

  def change
    execute "ALTER TABLE users CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_bin"

    execute "ALTER TABLE users CHANGE email VARCHAR(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin"
    execute "ALTER TABLE users CHANGE name VARCHAR(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin"

    execute "ALTER TABLE blogs CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_bin"
    execute "ALTER TABLE blogs CHANGE title VARCHAR(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin"
    execute "ALTER TABLE blogs CHANGE content VARCHAR(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin"
    execute "ALTER TABLE blogs CHANGE tag VARCHAR(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin"
    execute "ALTER TABLE blogs CHANGE name VARCHAR(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin"
  end
end
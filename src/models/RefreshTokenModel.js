import bookshelf from "../db";

const RefreshToken = bookshelf.model("RefreshToken", {
  tableName: "refresh_tokens",
  user() {
    return this.belongsTo("User", "user_id", "user_id");
  },
});

export default RefreshToken;

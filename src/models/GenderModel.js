import bookshelf from "../db";

const Gender = bookshelf.model("Gender", {
  tableName: "genders",
  card() {
    return this.belongsTo("Card");
  },
});
export default Gender;

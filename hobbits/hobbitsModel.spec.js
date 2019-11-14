const { insert } = require("./hobbitsModel.js");
const db = require("../data/dbConfig");

describe("hobbit model", function() {
  describe("insert()", function() {
    beforeEach(async () => {
      await db("hobbits").truncate();
    });
    it("should insert a hobbit", async function() {
      // insert a hobbit
      await insert({ name: "sam" });
      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(1);
    });

    it("should insert the provided hobbit", async function() {
      let hobbit = await insert({ name: "sam" });
      expect(hobbit.name).toBe("sam");
      expect(hobbit.id).toBeDefined();
      hobbit = await insert({ name: "jam" });
      expect(hobbit.name).toBe("jam");

      expect(hobbit.id).toBeDefined();
    });
  });
});

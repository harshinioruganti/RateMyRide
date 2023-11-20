const mongoose = require("mongoose")
const request = require("supertest")
require("dotenv").config();
const app = express();
var api = require('./api.js');
api.setApp( app, client );



describe("POST /api/product/getAllRides", () => {
    it("should return all Rides", async () => {
        return request(app)
            .get("/api/getAllRides")
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
            })
    });
});
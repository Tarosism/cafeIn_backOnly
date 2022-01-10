"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("posts", [
      {
        id: "1",
        large_img: "http://placeimg.com/300/300/people",
        small_img: "http://placeimg.com/300/300/people",
        tel: "02-123-456",
        adress: "서울시 어쩌구",
        distance: 12,
        title: "공대카페",
        location: "서구",
        lat: 37.5663,
        long: 126.9782,
      },
      {
        id: "2",
        large_img: "http://placeimg.com/300/300/animals",
        small_img: "http://placeimg.com/300/300/animals",
        tel: "02-345-789",
        adress: "서울시 저쩌구",
        distance: 12,
        title: "달콤",
        location: "서구",
        lat: 37.541,
        long: 126.986,
      },
      //숭례문
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts", null, {});
  },
};

module.exports = {
  testMatch: ["**/__tests__/**/*.test.js"],
  moduleNameMapper: {
    "@/(.*)": ["<rootDir>/src/$1"],
  },
};

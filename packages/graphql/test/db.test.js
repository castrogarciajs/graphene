import { vi } from "vitest";

const messageDB = "connected succesfuly";

const mockMongoose = {
  connect: vi.fn().mockReturnValue(messageDB),
  disconnect: vi.fn(),
};

test("should return connected", () => {
  console.log(mockMongoose.connect);
});

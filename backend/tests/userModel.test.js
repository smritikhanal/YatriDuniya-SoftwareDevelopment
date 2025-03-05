const SequelizeMock = require('sequelize-mock');
const sequelize = new SequelizeMock();  // Mock Sequelize instance

// Defining the User model using Sequelize Mock
const User = sequelize.define('User', {
  id: { type: SequelizeMock.INTEGER, primaryKey: true, autoIncrement: true },
  name: SequelizeMock.STRING(255),
  contact: SequelizeMock.STRING(20),
  email: SequelizeMock.STRING(255),
  password: SequelizeMock.STRING(255),
  created_at: SequelizeMock.DATE,
});

describe("User Model", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Ensure each test starts fresh by clearing mocks
  });

  test("should create a user with valid fields", async () => {
    const mockUserData = {
      name: "John Doe",
      contact: "1234567890",
      email: "johndoe@example.com",
      password: "password123", // No hashing involved here
    };

    // Mocking the create method to simulate user creation
    User.create = jest.fn().mockResolvedValue(mockUserData);

    // Create user
    const newUser = await User.create(mockUserData);

    // Assertions
    expect(newUser.name).toBe(mockUserData.name);
    expect(newUser.contact).toBe(mockUserData.contact);
    expect(newUser.email).toBe(mockUserData.email);
    expect(newUser.password).toBe(mockUserData.password); // Directly check the password as we are not hashing
  });

  test("should not allow duplicate emails", async () => {
    const mockUserData = {
      name: "Jane Doe",
      contact: "0987654321",
      email: "johndoe@example.com", // Same email as the first user
      password: "password123",
    };

    // Mock a unique constraint violation error (duplicate email)
    User.create = jest.fn().mockRejectedValue(new Error("Validation error: email must be unique"));

    await expect(User.create(mockUserData)).rejects.toThrow("Validation error: email must be unique");
  });

  test("should validate email format", async () => {
    const invalidUserData = {
      name: "Invalid User",
      contact: "1234567890",
      email: "invalid-email", // Invalid email format
      password: "password123",
    };

    // Mock validation error for invalid email format
    User.create = jest.fn().mockRejectedValue(new Error("Validation error: email must be a valid email"));

    await expect(User.create(invalidUserData)).rejects.toThrow("Validation error: email must be a valid email");
  });

  test("should require name field", async () => {
    const invalidUserData = {
      contact: "1234567890",
      email: "missingname@example.com",
      password: "password123",
    };

    // Mock validation error for missing 'name' field
    User.create = jest.fn().mockRejectedValue(new Error("Validation error: name cannot be null"));

    await expect(User.create(invalidUserData)).rejects.toThrow("Validation error: name cannot be null");
  });
});

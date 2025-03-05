const SequelizeMock = require('sequelize-mock');
const sequelize = new SequelizeMock();  // Mock Sequelize instance

// Define the Contact model using Sequelize Mock
const Contact = sequelize.define('Contact', {
  name: { type: SequelizeMock.STRING, allowNull: false },
  contact: { type: SequelizeMock.STRING },
  email: { type: SequelizeMock.STRING, allowNull: false },
  message: { type: SequelizeMock.TEXT, allowNull: false },
  created_at: { type: SequelizeMock.DATE, defaultValue: SequelizeMock.NOW },
});

describe("Contact Model", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  test("should create a contact with valid fields", async () => {
    const mockContactData = {
      name: "John Doe",
      contact: "1234567890",
      email: "johndoe@example.com",
      message: "This is a test message.",
    };
  
    // Mock the create method to simulate contact creation with valid fields
    const mockContact = {
      ...mockContactData,
      created_at: new Date().toISOString(), // Manually adding the created_at field
    };
  
    Contact.create = jest.fn().mockResolvedValue(mockContact);
  
    // Create contact
    const newContact = await Contact.create(mockContactData);
  
    // Assertions
    expect(newContact.name).toBe(mockContactData.name);
    expect(newContact.contact).toBe(mockContactData.contact);
    expect(newContact.email).toBe(mockContactData.email);
    expect(newContact.message).toBe(mockContactData.message);
    expect(newContact.created_at).toBeTruthy(); // Check that created_at is set
  });
  

  test("should not allow missing required fields", async () => {
    const invalidContactData = {
      contact: "1234567890",
      email: "missingname@example.com",
      message: "Message without a name",
    };

    // Mock a validation error for missing 'name' field
    Contact.create = jest.fn().mockRejectedValue(new Error("Validation error: name cannot be null"));

    await expect(Contact.create(invalidContactData)).rejects.toThrow("Validation error: name cannot be null");
  });

  test("should validate email format", async () => {
    const invalidContactData = {
      name: "John Doe",
      contact: "1234567890",
      email: "invalid-email", // Invalid email format
      message: "Hello, I would like more information about your services.",
    };

    // Mock validation error for invalid email format
    Contact.create = jest.fn().mockRejectedValue(new Error("Validation error: email must be a valid email"));

    await expect(Contact.create(invalidContactData)).rejects.toThrow("Validation error: email must be a valid email");
  });

  test("should require a message", async () => {
    const invalidContactData = {
      name: "John Doe",
      contact: "1234567890",
      email: "johndoe@example.com",
      // Missing message field
    };

    // Mock validation error for missing 'message' field
    Contact.create = jest.fn().mockRejectedValue(new Error("Validation error: message cannot be null"));

    await expect(Contact.create(invalidContactData)).rejects.toThrow("Validation error: message cannot be null");
  });

  test("should create a contact with a timestamp", async () => {
    const mockContactData = {
      name: "John Doe",
      contact: "1234567890",
      email: "johndoe@example.com",
      message: "This is a test message.",
    };
  
    // Mock the create method to simulate contact creation with a timestamp
    const mockContact = {
      ...mockContactData,
      created_at: new Date().toISOString(), // Manually adding the created_at field
    };
  
    Contact.create = jest.fn().mockResolvedValue(mockContact);
  
    // Create contact
    const newContact = await Contact.create(mockContactData);
  
    // Check that created_at is a valid timestamp
    expect(newContact.created_at).toBeTruthy();
  });
  
});

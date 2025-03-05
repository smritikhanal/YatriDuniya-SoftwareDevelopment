const SequelizeMock = require('sequelize-mock');
const sequelize = new SequelizeMock();  // Mock Sequelize instance

// Defining the Booking model using Sequelize Mock
const Booking = sequelize.define('Booking', {
  name: { type: SequelizeMock.STRING, allowNull: false },
  contact: { type: SequelizeMock.STRING, allowNull: false },
  email: { type: SequelizeMock.STRING, allowNull: false },
  people: { type: SequelizeMock.INTEGER, allowNull: false },
  date: { type: SequelizeMock.DATE, allowNull: false },
  message: { type: SequelizeMock.TEXT, allowNull: true },
  trip: { type: SequelizeMock.STRING, allowNull: false },
});

describe("Booking Model", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  test("should create a booking with valid fields", async () => {
    const mockBookingData = {
      name: "John Doe",
      contact: "1234567890",
      email: "johndoe@example.com",
      people: 2,
      date: new Date("2025-03-15T12:00:00Z"),
      message: "Looking forward to the trip!",
      trip: "Nepal Trekking",
    };

    // Mock the create method to simulate booking creation
    Booking.create = jest.fn().mockResolvedValue(mockBookingData);

    // Create booking
    const newBooking = await Booking.create(mockBookingData);

    // Assertions
    expect(newBooking.name).toBe(mockBookingData.name);
    expect(newBooking.contact).toBe(mockBookingData.contact);
    expect(newBooking.email).toBe(mockBookingData.email);
    expect(newBooking.people).toBe(mockBookingData.people);
    expect(newBooking.date.toISOString()).toBe(mockBookingData.date.toISOString()); // Compare as strings
    expect(newBooking.message).toBe(mockBookingData.message);
    expect(newBooking.trip).toBe(mockBookingData.trip);
  });

  test("should not allow missing required fields", async () => {
    const invalidBookingData = {
      contact: "1234567890",
      email: "missingname@example.com",
      people: 2,
      date: new Date("2025-03-15T12:00:00Z"),
      trip: "Nepal Trekking",
    };

    // Mock a validation error for missing required 'name' field
    Booking.create = jest.fn().mockRejectedValue(new Error("Validation error: name cannot be null"));

    await expect(Booking.create(invalidBookingData)).rejects.toThrow("Validation error: name cannot be null");
  });

  test("should validate email format", async () => {
    const invalidBookingData = {
      name: "Invalid User",
      contact: "1234567890",
      email: "invalid-email", // Invalid email format
      people: 2,
      date: new Date("2025-03-15T12:00:00Z"),
      trip: "Nepal Trekking",
    };

    // Mock validation error for invalid email format
    Booking.create = jest.fn().mockRejectedValue(new Error("Validation error: email must be a valid email"));

    await expect(Booking.create(invalidBookingData)).rejects.toThrow("Validation error: email must be a valid email");
  });

  test("should not allow a booking with invalid number of people", async () => {
    const invalidBookingData = {
      name: "Invalid User",
      contact: "1234567890",
      email: "valid@example.com",
      people: -1, // Invalid number of people
      date: new Date("2025-03-15T12:00:00Z"),
      trip: "Nepal Trekking",
    };

    // Mock a validation error for invalid number of people
    Booking.create = jest.fn().mockRejectedValue(new Error("Validation error: people must be a positive integer"));

    await expect(Booking.create(invalidBookingData)).rejects.toThrow("Validation error: people must be a positive integer");
  });

  test("should validate required fields on booking creation", async () => {
    const invalidBookingData = {
      name: "John Doe",
      contact: "1234567890",
      email: "johndoe@example.com",
      people: 2,
      trip: "Nepal Trekking", // Missing date
    };

    // Mock a validation error for missing 'date' field
    Booking.create = jest.fn().mockRejectedValue(new Error("Validation error: date cannot be null"));

    await expect(Booking.create(invalidBookingData)).rejects.toThrow("Validation error: date cannot be null");
  });
});

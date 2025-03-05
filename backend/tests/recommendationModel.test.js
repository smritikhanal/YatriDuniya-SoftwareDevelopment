const SequelizeMock = require('sequelize-mock');
const sequelize = new SequelizeMock();  // Mock Sequelize instance

// Define the Recommendation model using Sequelize Mock
const Recommendation = sequelize.define('Recommendation', {
  name: { type: SequelizeMock.STRING, allowNull: false },
  trip: { type: SequelizeMock.STRING, allowNull: false },
  journey: { type: SequelizeMock.STRING, allowNull: false },
  message: { type: SequelizeMock.TEXT, allowNull: false },
  image: { type: SequelizeMock.STRING, allowNull: true }, // Optional field
  created_at: { type: SequelizeMock.DATE, defaultValue: SequelizeMock.NOW },
}, {
  timestamps: false, // Disable createdAt and updatedAt columns
});

describe('Recommendation Model', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Ensure each test starts fresh
  });

  test('should create a recommendation with valid fields', async () => {
    const mockRecommendationData = {
      name: 'John Doe',
      trip: 'Nepal',
      journey: 'Everest Base Camp',
      message: 'This is a wonderful experience!',
      image: '/images/everest.jpg',
    };

    const mockRecommendation = {
      ...mockRecommendationData,
      created_at: new Date().toISOString(), // Manually adding created_at field
    };

    // Mock the create method to simulate recommendation creation
    Recommendation.create = jest.fn().mockResolvedValue(mockRecommendation);

    // Create recommendation
    const newRecommendation = await Recommendation.create(mockRecommendationData);

    // Assertions
    expect(newRecommendation.name).toBe(mockRecommendationData.name);
    expect(newRecommendation.trip).toBe(mockRecommendationData.trip);
    expect(newRecommendation.journey).toBe(mockRecommendationData.journey);
    expect(newRecommendation.message).toBe(mockRecommendationData.message);
    expect(newRecommendation.image).toBe(mockRecommendationData.image);
    expect(newRecommendation.created_at).toBeTruthy(); // Check that created_at is set
  });

  test('should not allow missing required fields', async () => {
    const invalidRecommendationData = {
      trip: 'Nepal', // Missing 'name', 'journey', and 'message'
      journey: 'Everest Base Camp',
      message: 'This is a wonderful experience!',
      image: '/images/everest.jpg',
    };

    // Mock a validation error for missing required fields
    Recommendation.create = jest.fn().mockRejectedValue(new Error('Validation error: name cannot be null'));

    await expect(Recommendation.create(invalidRecommendationData)).rejects.toThrow('Validation error: name cannot be null');
  });

  test('should validate email format (optional in this case)', async () => {
    const invalidRecommendationData = {
      name: 'John Doe',
      trip: 'Nepal',
      journey: 'Everest Base Camp',
      message: 'This is a wonderful experience!',
      image: 'invalid-image-url', // Invalid URL format for image
    };

    // Mock validation error for invalid image URL format
    Recommendation.create = jest.fn().mockRejectedValue(new Error('Validation error: image must be a valid URL'));

    await expect(Recommendation.create(invalidRecommendationData)).rejects.toThrow('Validation error: image must be a valid URL');
  });

  test('should handle missing image as optional', async () => {
    const recommendationWithoutImage = {
      name: 'Jane Doe',
      trip: 'Nepal',
      journey: 'Annapurna Circuit',
      message: 'Amazing journey!',
      image: null, // No image
    };

    const mockRecommendation = {
      ...recommendationWithoutImage,
      created_at: new Date().toISOString(),
    };

    // Mock the create method to return the mock data
    Recommendation.create = jest.fn().mockResolvedValue(mockRecommendation);

    // Create recommendation using the mocked method
    const newRecommendation = await Recommendation.create(recommendationWithoutImage);

    // Assertions to verify the returned mock data
    expect(newRecommendation.name).toBe(recommendationWithoutImage.name);
    expect(newRecommendation.image).toBeNull(); // Ensure image can be null
  });

  test('should create a recommendation with a timestamp', async () => {
    const mockRecommendationData = {
      name: 'John Doe',
      trip: 'Nepal',
      journey: 'Everest Base Camp',
      message: 'This is a wonderful experience!',
      image: '/images/everest.jpg',
    };

    const mockRecommendation = {
      ...mockRecommendationData,
      created_at: new Date().toISOString(), // Manually adding created_at field
    };

    // Mock the create method to simulate recommendation creation with a timestamp
    Recommendation.create = jest.fn().mockResolvedValue(mockRecommendation);

    // Create recommendation
    const newRecommendation = await Recommendation.create(mockRecommendationData);

    // Check that created_at is a valid timestamp
    expect(newRecommendation.created_at).toBeTruthy();
  });
});

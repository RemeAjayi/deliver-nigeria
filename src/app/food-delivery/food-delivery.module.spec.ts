import { FoodDeliveryModule } from './food-delivery.module';

describe('FoodDeliveryModule', () => {
  let foodDeliveryModule: FoodDeliveryModule;

  beforeEach(() => {
    foodDeliveryModule = new FoodDeliveryModule();
  });

  it('should create an instance', () => {
    expect(foodDeliveryModule).toBeTruthy();
  });
});

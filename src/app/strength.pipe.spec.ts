import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('StrengthPipe', () => {
  it('should display weak if strength is less than 5', () => {
    //arrange
    const pipe = new StrengthPipe();
    
    //act
    var result = pipe.transform(5);
  
    //assert
    expect(result).toBeTruthy()
    expect(result).toEqual('5 (weak)');
  });

  it('should display strong if strength is 10', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(10)).toEqual('10 (strong)');
  });

  it('should display unbelievable if strength is > 20', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(21)).toEqual('21 (unbelievable)');
  });
});
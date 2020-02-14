const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// И да и нет
// Можно так сделать и использовать эту функцию для генерации
// Но я хотел бы, чтобы был сервис с методом генерации и функция его использовала,
// чтобы вы поняли как использовать готовый сервис, а не писать логику с нуля.
export function randomStringGeneratorFactory(length: number) {
  return () => {
    let result = '';

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  };
}

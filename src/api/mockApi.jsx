export const mockFetchProducts = () => {
  return Promise.resolve([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99,
      image: "/assets/images/headphones.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199,
      image: "/assets/images/watch.jpg",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 59,
      image: "/assets/images/speaker.jpg",
    },
  ]);
};

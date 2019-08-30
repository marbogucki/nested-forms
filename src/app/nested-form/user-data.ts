export const userData = {
  cities: [
    {
      id: 1,
      city: 'Warszawa',
      nested: [
        { id: 1, address: 'Wielkopolska' },
        { id: 2, address: 'Marszałkowska' },
      ]
    },
    {
      id: 2,
      city: 'Gdańsk',
      nested: []
    },
    {
      id: 3,
      city: 'Kraków',
      nested: [
        { id: 1, address: 'Wielka' },
        { id: 2, address: 'Szeroka' },
        { id: 3, address: 'Długa' },
      ]
    }
  ]
};

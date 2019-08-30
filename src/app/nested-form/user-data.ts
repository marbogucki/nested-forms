export const userData = {
  cities: [
    {
      id: 1,
      city: 'Warszawa',
      nested: [
        {
          id: 1,
          address: 'Wielkopolska',
          nested: [
            { id: 1,  info: 'lorem 1' },
            { id: 2,  info: 'lorem 2' }
          ]
        },
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

import xs from 'xstream';

export function fetchLocations(sources) {
    const locations$ = sources.ACTION
        .filter(action => action.type === fetchLocations())
        .map(action => action.payload.user);

    const request$ = locations$
        .map(user => ({
            url: `https://5e9fdb2f11b078001679ceca.mockapi.io/api/locations`,
            category: 'users'
        }));

    const response$ = sources.HTTP
        .select('locations')
        .flatten();


    return {
        ACTION: response$,
        HTTP: request$
    }
}
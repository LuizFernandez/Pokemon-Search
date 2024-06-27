# Pokemon Search

With this tool, the user can search a Pokémon based in its name or pokedex entry number.

So, in the ui there is an input field, an select option field and a Search Button. To start the search the user needs to select what type of search he wants to do, being by Pokémon Name or the Pokedex Entry Number.

After selecting the type of search he can them type the _text_ that will identifie the pokémon that he wishes to find.

In the end, he only needs to press the Seach button, so that the application can fecth the data realated to the search.

After the request, if there is a value that it is find, then the UI will update showing the Pokémon name, its pokedex entry value (its id) and its frontal sprite.

In case that the pokémon doesn't exists, an error message will be shown.

If a pokémon is shown in the UI, the user can select the next or the previous pokémon, by pressing the buttons that are under the sprite.

Even after a search, if the user wishes to do another search,he just needs to type the new text for search.

---

# Tasks

The task that were asked to be made:

1. Have a web page that allows a user to enter a Pokémon name;
2. When submitting, query https://pokeapi.co and display the given Pokémon (at least name, number, and sprite), or an error message if no match is found;
3. Provide “Previous” & “Next” buttons, that switch to the previous/next Pokémon, based on their id number;
4. Provide a text-based search feature, where inputting a name or partial name should look for a matching Pokémon and show it.
5. Have at least two automated tests, for the two features above.
6. (Optional) Build a caching mechanism to prevent making a request to https://pokeapi.co each time we search for a Pokémon.

## Search Pokémon

The tasks that are related to the search of a pokémon, are made using a input, select option field and a submit button.

While testing the request to the API [https://pokeapi.co], whenever the name of a Pokémon wasn't its fullname, the api returned an error response of **404**. So to prevent that, the button search was added so that the user can write the fullname, and then by click in the button, the request was made.

Note, that even after clicking the seach button, if the name is wrong, then the response will be a **404**, but in this case it the user fault.

The button, also works in a way to prevent multiple request to the API, whenever the user is typing in the search bar, in this way, only one request is made after the the click event.

About the select option field, since the API allows a search based in the pokémon id (Pokedex entre number), the user can choose the way he want to make the search, between the pokémon name or its id.

## Display

After the application recives the response of the API, it render in the UI, the name of the pokémon, its pokedex entry number and its sprite. Also, the buttons to go to the next pokémon or the previous one, are also render.

The buttons, only render after the first search, so that the user can only switch pokémon, whenever there is at least one searched, that will work as a start point.

## Cache

To prevent multiple request of the same object to the API, a cache as created, so that if a pokémon data was already requested, there will be no need to request again that data.

The cache works through two data structures, one that will have the pair (id, name) and another one that will have the data associated with the id.

After a response is recived, the application will check if the pokémon id, is already in the first data structure. If there isn't an entry, we will add the new pair to that structure, and add the data to the another one (Note, only the data that is shown is stored in this case, name, id and sprite).

If the user searchs a new pokémon, or switches from pokémon through the buttons, before a request is made, the entry value (id or name) is search in the first data strcuture. In the case an entry is found, instead of make a new request, the application will fecth the data inside of the second sctructure and render it.

# Setup the Application

1. Run: npm i
2. Run: npm run dev

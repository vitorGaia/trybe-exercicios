
const CHANGE_PERSON = 'CHANGE_PERSON';

const changePerson = (personInfos) => ({
  type: CHANGE_PERSON,
  data: personInfos,
})

const fetchPerson = (search) => {
  return async (dispatch) => {

    const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${search}`);

    const data = await response.json();

    dispatch(changePerson(data[0]));
  }
}

export {
  CHANGE_PERSON,
  changePerson,
  fetchPerson,
};
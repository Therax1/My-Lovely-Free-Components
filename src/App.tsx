import Input01 from './components/UI/001_Input'
function App() {

  return (
    <>
      <form className='px-4 flex flex-col gap-3'>

        <div className='flex'>
          <Input01
            type='text'
            name='myInput'
            id='myinput'
            placeholder='Search'
            labelFor='input'
            labelText='Username :'
          />

        <Input01
          type='text'
          name='myInput'
          id='myinput'
          placeholder='Search'
          labelFor='input'
          labelText='Surname :'
        />
        </div>

        <Input01
          type='text'
          name='myInput'
          id='myinput'
          placeholder='Search'
          labelFor='input'
          labelText='Username :'
        />

        <Input01
          type='text'
          name='myInput'
          id='myinput'
          placeholder='Search'
          labelFor='input'
          labelText='Username :'
        />
      </form>
    </>
  )
}

export default App

import { useState } from 'react';

function App() {
const [color,setColor]= useState('white');

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <h3 className='flex justify-center font-semibold text-lg'>
          React and vite application with bg-Changer.
        </h3>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className='outline-none px-4 py-1 rounded-full text-white font-semibold text-lg' 
              style={{backgroundColor:"red"}} onClick={()=>setColor('red')}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white font-semibold text-lg' 
              style={{backgroundColor:"lightblue"}} onClick={()=>setColor('lightblue')}>Sky Blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-white font-semibold text-lg' 
              style={{backgroundColor:"orange"}} onClick={()=>setColor('orange')}>Orange</button>
            <button className='outline-none px-4 py-1 rounded-full text-white font-semibold text-lg' 
              style={{backgroundColor:"green"}} onClick={()=>setColor('green')}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white font-semibold text-lg' 
              style={{backgroundColor:"blue"}} onClick={()=>setColor('blue')}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-white font-semibold text-lg' 
              style={{backgroundColor:"olive"}} onClick={()=>setColor('olive')}>Olive</button>
            <button className='outline-none px-4 py-1 rounded-full text-white font-semibold text-lg' 
              style={{backgroundColor:"black"}} onClick={()=>setColor('black')}>Black</button>
            <button className='outline-none px-4 py-1 rounded-full text-white font-semibold text-lg' 
              style={{backgroundColor:"yellow"}} onClick={()=>setColor('yellow')}>Yellow</button>
            <button className='outline-none px-4 py-1 rounded-full text-white font-semibold text-lg' 
              style={{backgroundColor:"violet"}} onClick={()=>setColor('violet')}>Violet</button>
          </div>
        </div>
      </div>
  )
}

export default App;

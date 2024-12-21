import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { useEffect, useState } from 'react'

const people = [
  { id: 2, name: '2. Klasse' },
  { id: 3, name: '3. Klasse' },
  { id: 4, name: '4. Klasse' },
]

export default function LevelSelector({
  onChange,
  initialLevel,
}: {
  onChange: (level: number) => void
  initialLevel: number
}) {
  const [selectedLevel, setSelectedLevel] = useState(people[initialLevel - 2])
  useEffect(() => {
    onChange(selectedLevel.id)
  }, [selectedLevel])

  return (
    <div className="flex flex-col">
      <Listbox value={selectedLevel as any} onChange={setSelectedLevel as any}>
        <ListboxButton className="h-14 w-40 bg-white relative rounded-lg border-2 hover:bg-gray-100">
          <label className="absolute left-2 text-xs top-1 text-gray-400">
            Klassenstufe
          </label>
          <p className="mt-4 text-lg">{selectedLevel.name}</p>
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="mt-2 rounded-lg bg-white shadow-lg border-2 border-gray-200"
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="h-10 w-40 hover:cursor-pointer hover:text-white hover:bg-cyan-700 text-center pt-2"
            >
              <p className="my-auto h-full">{person.name}</p>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}

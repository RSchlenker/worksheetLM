import { Circles } from 'react-loader-spinner'

export default function LoadingButton({
  isLoading,
  text,
  onClick,
}: {
  isLoading: boolean
  text: string
  onClick: Function
}) {
  return (
    <button
      type="button"
      className="inline-flex min-w-40 h-14 max-h-16 justify-center rounded-md bg-cyan-700 hover:bg-cyan-400 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto ml-auto focus:outline-none focus:shadow-outline focus:bg-emerald-600 my-auto"
      onClick={() => onClick()}
    >
      {isLoading ? (
        <div data-testid="ai-loader">
          <Circles
            height="23"
            width="23"
            color="white"
            ariaLabel="circles-loading"
          />
        </div>
      ) : (
        <p className="my-auto">{text}</p>
      )}
    </button>
  )
}

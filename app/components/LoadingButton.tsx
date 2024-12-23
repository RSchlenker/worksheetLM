import { Circles } from 'react-loader-spinner'

export default function LoadingButton({
  isLoading,
  text,
  onClick,
  enabled,
}: {
  isLoading: boolean
  text: string
  onClick: Function
  enabled: () => boolean
}) {
  return (
    <button
      type="button"
      className={`inline-flex min-w-40 h-14 max-h-16 justify-center rounded-md px-3 py-2 text-sm font-semibold text-white sm:w-auto ml-auto my-auto ${enabled() ? 'bg-cyan-700 hover:bg-cyan-400' : 'hover:bg-gray-500 bg-gray-400'}`}
      disabled={!enabled()}
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

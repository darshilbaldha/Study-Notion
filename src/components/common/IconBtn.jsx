export default function IconBtn({
    text,
    onclick,
    children,
    disabled,
    outline = false,
    customClasses,
    type,
  }) {
    return (
      // <button
      //   disabled={disabled}
      //   onClick={onclick}
      //   className={`flex items-center ${
      //     outline ? "border-[1px] border-yellow-50 bg-transparent" : "bg-yellow-50"
      //   } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 ${customClasses} ${!disabled  ?("bg-yellow-50"):("bg-yellow-400")}`}
      //   type={type}
      // >
      <button
        disabled={disabled}
        onClick={onclick}
        className={`flex items-center ${
          outline ? "border-[1px] border-yellow-50 bg-transparent" : "bg-yellow-50"
        } cursor-pointer gap-x-2 rounded-md py-2 px-3 sm:px-5 font-semibold text-richblack-900 ${customClasses} ${!outline && !disabled  ?("bg-yellow-50"):("bg-yellow-400")}}`}
        type={type}
      >
        {children ? (
          <>
            <span className={`${outline && "text-yellow-50"}`}>{text}</span>
            {children}
          </>
        ) : (
          text
        )}
      </button>
    )
  }

// import Spinner from 'components/Spinner'
import React from 'react'
import { ButtonProps } from 'interfaces/button'
import classNames from 'classnames'

const HButton: React.FC<ButtonProps> = (props) => {
    const {
        children,
        type = 'button',
        theme = 'Default',
        size = "Default",
        disabled = false,
        icon,
        loading = false,
        loadingText = 'Lütfen bekleyiniz..',
        loadingIcon = "<Spinner />",
        iconPosition = 'right',
        className = '',
        onClick
    } = props


    const iconState = loading ? loadingIcon : icon
    return (
        <button
            type={type}
            className={`${classNames({
                'inline-flex items-center justify-center gap-2 font-semibold leading-6 pointer rounded-lg transition-all select-none disabled:opacity-30  disabled:pointer-events-none': true,
                'bg-[#ff6000] text-white hover:bg-[#bf4800] hover:text-white focus:shadow-buttonBorder active:bg-[#ff904c] active:text-white': theme === 'Primary',
                'bg-[#ffefe5] text-[#ff6000] hover:bg-[#ffbf99] hover:text-[#ff6000] focus:shadow-buttonBorder active:bg-transparent active:text-[#ff6000] active:shadow-none': theme === 'Variant',
                'bg-[#6b83fa] text-white hover:bg-[#5365bf] hover:text-white focus:shadow-buttonBorder active:bg-[#99aaff] active:text-white': theme === 'Secondary',
                'bg-[#f0f0f0] text-[#212121] active:text-[#666666]': theme === 'Default',
                'bg-transparent text-[#ff6000] border-2 border-[#ff6000] hover:bg-[#ffbf99] hover:text-[#ff6000] focus:shadow-buttonBorder focus:bg-[#ffbf99] focus:text-[#ff6000] active:bg-transparent active:text-[#ff904c] active:border-2 active:border-[#ff904c] active:shadow-none': theme === 'BorderedPrimary',
                'bg-transparent text-[#212121] border-2 border-[#dadada] hover:bg-[#f0f0f0] focus:bg-transparent focus:text-[#212121] active:bg-transparent active:text-[#666666] active:shadow-none': theme === 'BorderedDefault',
                'bg-transparent text-[#ff6000] hover:bg-[#f0f0f0] focus:shadow-buttonBorder focus:bg-transparent active:bg-transparent active:text-[#ff904c] active:shadow-none': theme === 'GhostPrimary',
                'bg-transparent text-[#212121] hover:bg-[#f0f0f0] focus:shadow-buttonBorder focus:bg-transparent active:bg-transparent active:text-[#666666] active:shadow-none': theme === 'GhostDefault',
                'bg-[#008a09] text-white hover:bg-[#006907] focus:shadow-buttonBorder active:bg-[#36b23e] active:shadow-none': theme === 'Success',
                'bg-[#fa0000] text-white hover:bg-[#bf0000] focus:shadow-buttonBorder active:bg-[#ff4c4c] active:shadow-none': theme === 'Danger',
                'py-4 px-6 text-base': size === 'Large',
                'py-3 px-4 text-base': size === 'Default',
                'py-2 px-4 text-md': size === 'Small',
                'p-2 text-sm': size === 'Tiny',
            })} ${className}`}
            disabled={loading || disabled}
            onClick={onClick}>
            {iconPosition === 'left' && iconState}
            {loading && !!children ? loadingText : children}
            {iconPosition === 'right' && iconState}
        </button>
    )
}
export default HButton
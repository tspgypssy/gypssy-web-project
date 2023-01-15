

export const Toastr = ({children}) => {

    return (
            <div class=" flex items-center justify-between max-w-xs px-3 py-1 bg-white border rounded-md shadow-sm">
            <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-super-primary-blue" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd" />
            </svg>
            <p class="ml-3 text-sm font-bold text-super-primary-blue">{children}</p>
            </div>
          
            </div>

    )}
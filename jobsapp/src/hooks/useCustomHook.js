import { useState } from "react"

const useCustomHook = () => {
    const [jobs, setJobs] = useState([])
    const [savedJobs, setSavedJobs] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({ err: false, errorText: '' })
    const [searchText, setSearchText] = useState('')
    const [isOpen, setIsOpen] = useState(false)


    return { jobs, setJobs, loading, setLoading, error, setError, searchText, setSearchText, savedJobs, setSavedJobs, isOpen, setIsOpen }
}
export default useCustomHook
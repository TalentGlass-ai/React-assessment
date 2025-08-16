import React, { createContext, useContext, useEffect, useMemo } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import useCustomHook from '../hooks/useCustomHook'

const JobsContext = createContext()

export const JobsProvider = ({ children }) => {
    const { jobs,
        setJobs,
        loading,
        setLoading,
        error,
        setError,
        searchText,
        setSearchText, savedJobs,
        setSavedJobs,
        isOpen,
        setIsOpen } = useCustomHook()
    const debouncedVal = useDebounce(searchText, 2000)

    const handleFetchJobs = () => {
        setLoading(true)
        fetch(`https://689f240f3fed484cf879300a.mockapi.io/jobs`)
            .then((res) => res.json())
            .then((data) => {
                setJobs(data)
                setLoading(false)
                setError({ err: false, errorText: "" })
                filteredSavedJobs(data)
            }).catch((err) => {
                setJobs([])
                setLoading(false)
                setError({ err: true, errorText: "Failed to load jobs" })
            })
    }

    const handleSaveJob = (obj, text) => {

        const newObj = {
            title: obj.title,
            company: obj.company,
            location: obj.location,
            id: obj.id,
            isSaved: !obj.isSaved
        }
        fetch(`https://689f240f3fed484cf879300a.mockapi.io/jobs/${obj.id}`, {
            body: JSON.stringify(newObj),
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setError({ err: false, errorText: "" })
                if (text === 'unsave') {
                    const newData = [...savedJobs];
                    const updatedJobs = newData.filter((job) => job.id !== data.id);
                    const jobListA = [...jobs]
                    const updatedJobsA = jobListA.map(job =>
                        job.id === data.id ? data : job
                    );
                    setSavedJobs(updatedJobs);
                    setJobs(updatedJobsA)
                } else {
                    const newJob = [...savedJobs, data];
                    const jobList = [...jobs]
                    const updatedJobs = jobList.map(job =>
                        job.id === data.id ? data : job
                    );
                    setJobs(updatedJobs)
                    setSavedJobs(newJob);
                }
            }).catch((err) => {
                setSavedJobs([])
                setError({ err: true, errorText: err })
            })
    }

    const filteredJobs = useMemo(() => {
        const searchedValue = debouncedVal?.trim()?.toLowerCase()
        let data = jobs.filter((job) =>
            job.title.toLowerCase().includes(searchedValue) ||
            job.company.toLowerCase().includes(searchedValue)
        )
        if (data.length > 0) {
            setError({ err: false, errorText: "" })
            return data
        } else {
            setError({ err: true, errorText: "No job found!" })
            return []
        }
    }, [jobs, debouncedVal, setError])
    const filteredSavedJobs = (array) => {
        const data = array.filter((job) => job.isSaved)
        setSavedJobs(data)
    }

    useEffect(() => {
        handleFetchJobs()
    }, [])
    return (
        <JobsContext.Provider value={{
            jobs,
            loading,
            error,
            searchText,
            setSearchText,
            filteredJobs,
            handleSaveJob,
            savedJobs,
            setSavedJobs,
            isOpen,
            setIsOpen,

        }}>
            {children}
        </JobsContext.Provider>
    )
}
export const useJobs = () => useContext(JobsContext)
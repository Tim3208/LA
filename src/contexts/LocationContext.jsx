import { createContext, useContext, useState, useEffect } from "react";

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState("강남구");

  useEffect(() => {
    // 서버 호출 대신 로컬 저장소에서 불러오는 코드.
    // FIXME: 서버에서 호출해오는 코드 백엔드와 작업 필요
    const savedLocation = localStorage.getItem("userLocation");
    if (savedLocation) {
      setSelectedLocation(savedLocation);
    }
  }, []);

  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocationContext() {
  return useContext(LocationContext);
}

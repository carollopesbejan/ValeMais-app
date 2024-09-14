import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Container } from "../../components/styles/Container";
import { Map, TagMap } from "./style";
import { Callout, Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject, watchPositionAsync, LocationAccuracy } from "expo-location"
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

export function BuscarMapa () {
    const [location, setLocation] = useState<LocationObject | null>(null)
    const [pharmacies, setPharmacies] = useState([])

    async function requestLocationPermition() {
        const { granted } = await requestForegroundPermissionsAsync()

        if (granted) {
            const currentPosition = await getCurrentPositionAsync()
            setLocation(currentPosition)
            console.log("LOCALIZAÇÃO ATUAL => ", currentPosition)
        }
    }

    async function fetchNearbyPharmacies() {
        if (!location) return;

        const apiKey = "ebJjFr9yH3V14ShLSvlZk1Q8uVtpqXaxff8Z3E-NdXQ";
        const url = `https://discover.search.hereapi.com/v1/discover?at=${location.coords.latitude},${location.coords.longitude}&q=pharmacy&apiKey=${apiKey}`;

        try {
            const response = await axios.get(url);
            const places = response.data.items;
            setPharmacies(places);
        } catch (error) {
            console.error("Error fetching pharmacies", error);
        }
    }

    useEffect(() => {
        requestLocationPermition()
    },[])

    // useEffect(() => {
    //     watchPositionAsync({
    //         accuracy: LocationAccuracy.Highest,
    //         timeInterval: 30000,
    //         distanceInterval: 1
    //     }, (response) => {
    //         // console.log("Nova localização: ", response)
    //         setLocation(response)
    //     })
    // },[])

    useEffect(() => {
        if (location) {
            fetchNearbyPharmacies();
        }
    }, [location]);
    
    return (
        <Container>
            <SafeAreaView/>
            { location &&

                <Map provider={PROVIDER_GOOGLE} 
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                    // showsUserLocation

                >
                    <Marker 
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="Você está aqui"
                    >
                        {/* <Callout>
                            <TagMap>
                                <Text>Você está aqui</Text>
                            </TagMap>
                        </Callout> */}
                    </Marker>

                    {pharmacies.map((pharmacy, index) => (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: pharmacy.position.lat, // Latitude da farmácia
                                longitude: pharmacy.position.lng, // Longitude da farmácia
                            }}
                            title={pharmacy.title}
                            description={pharmacy.address.label}
                        >
                            {/* <Callout>
                                <TagMap>
                                    <Text>{pharmacy.title}</Text> 
                                    <Text>{pharmacy.address.label}</Text>
                                </TagMap>
                            </Callout> */}
                        </Marker>
                    ))}
                </Map>
            }
        </Container>
    );
}
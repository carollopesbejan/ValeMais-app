import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Container } from "../../components/styles/Container";
import { Map } from "./style";
import { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject, watchPositionAsync, LocationAccuracy } from "expo-location"

export function BuscarMapa () {
    const [location, setLocation] = useState<LocationObject | null>(null)

    async function requestLocationPermition() {
        const { granted } = await requestForegroundPermissionsAsync()

        if (granted) {
            const currentPosition = await getCurrentPositionAsync()
            setLocation(currentPosition)
            console.log("LOCALIZAÇÃO ATUAL => ", currentPosition)
        }
    }

    useEffect(() => {
        requestLocationPermition()
    },[])

    useEffect(() => {
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response) => {
            console.log("Nova localização: ", response)
            setLocation(response)
        })
    },[])
    
    return (
        <Container>
            { location &&

                <Map provider={PROVIDER_GOOGLE} 
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}

                >
                    <Marker 
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                    />
                </Map>
            }
        </Container>
    );
}
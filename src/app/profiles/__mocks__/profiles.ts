import { Profile } from "../models/profile.model";

export const JOBS = [
    "Developer",
    "Designer",
    "Product Manager",
    "Project Manager",
    "Sales",
    "Marketing",
]
export const MOCKS_LENGTH = 10;
export const getMockProfiles = async (): Promise<Profile[]> => {
    return fetch(`https://randomuser.me/api/?results=${MOCKS_LENGTH}`).then(
        res => res.json()
    ).then(
        res => res.results.map(
            (profile: any, index: number) => {
                return new Profile(
                    index.toString(),
                    profile.name.first,
                    profile.name.last,
                    profile.dob.age,
                    profile.job || JOBS[Math.floor(Math.random() * JOBS.length)],
                    Math.random() < 0.2 ? "" : profile.picture.large,
                    profile.description,
                );
            }
        )
    );
}

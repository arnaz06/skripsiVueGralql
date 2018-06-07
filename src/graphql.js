import gql from 'graphql-tag'


export const CREATE_MATRICULANT = gql`

mutation CreateMatriculant($NIK: String!,$NISN: String!,
                          $fullName: String!,$gender: Gender!,
                          $bloodType: BloodType!,$birthPlace: String!,
                          $birth: String!,$religion: Religion!,$citizenship: String!,
                          $fatherName: String!,$fatherBirth: String!, 
                          $motherName: String!,$motherBirth: String!, 
                          $parentsJob: String!, $email: String!,$phone: String!,
                          $password: String!,$sourceInformation: SourceInformation!,
                          $RegistrationGroup: Int!,$address: String!,
                          $status: Status!,$Origin: Int!,$LastEducation: Int!){
      createMatriculant(input:{
        NIK: $NIK,
        NISN: $NISN,
        fullName: $fullName,
        gender: $gender,
        bloodType: $bloodType,
        birthPlace: $birthPlace,
        birth: $birth,
        religion: $religion,
        citizenship: $citizenship,
        fatherName: $fatherName,
        fatherBirth:$fatherBirth,
        motherName: $motherName,
        motherBirth: $motherBirth,
        parentsJob: $parentsJob,
        email: $email,
        phone: $phone,
        password: $password,
        sourceInformation: $sourceInformation,
        RegistrationGroup: $RegistrationGroup,
        address: $address,
        status: $status,
        Origin: $Origin,
        LastEducation: $LastEducation
      }){
        NIK
        NISN
        fullName
        gender
        bloodType
        birthPlace
        birth
        religion
        citizenship
        fatherName
        fatherBirth
        motherName
        motherBirth
        parentsJob
        email
        phone
        password
        sourceInformation
        RegistrationGroup{
          type
          group
        }
        address
        status
        Origin{
          name
          district
          subDistrict
          zipcode
        }
        LastEducation{
          schoolName
          major
        }
        createdAt
        updatedAt
      }
    }
`

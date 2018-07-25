import gql from 'graphql-tag'



export const MATRICULANT_PER_MONTH= gql`
  query matriculantPerMonth($year: Int!){
    matriculantPerMonth(year:$year){
      jan
      feb
      mar
      apr
      may
      jun
      jul
      ags
      sep
      oct
      nov
      dec
    }
  }
`
export const CHANGE_STATUS=gql`
  mutation changeStatus($id:Int!,$status:Status!){
    changeStatusMatriculant(input: {
      id:$id,
      status:$status
    }){
      id
      status
    }
  }
`

export const MATRICULANT= gql`
  query matriculant($id: Int!,$name: String){
     matriculant(id: $id, name: $name) {
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
       RegistrationGroup {
         type
         group
       }
       address
       status
       Origin {
         name
         district
         subDistrict
         zipcode
       }
       LastEducation {
         schoolName
         major
       }
       Programs{
         name
       }
       createdAt
     }
  }
`

export const SORTMATRICULANT = gql`
query sortMatriculant($type:String!){
  sortMatriculant(type:$type){
    ia
    ib
    ic
    iia
    iib
  }
}
`

export const MATRICULANT_ALL = gql `
query matriculantAll{
  matriculantAll{
    id
    fullName
    NISN
    status
    createdAt
  }
}
`
export const STATMATRICULANT = gql`
query statMatriculant($date:String,$status:Status,$schoolName:String,$regisGroup:String){
  matriculantStatistic(
    date: $date,
    status: $status,
    schoolName: $schoolName,
    regisGroup: $regisGroup
    ){
     id
     fullName
     NISN
     status
     createdAt
  }
}
`

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
                          $status: Status!,$Origin: Int!,$LastEducation: Int!,$majorOne: Int!,$majorTwo: Int!, $userId: Int!){
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
        LastEducation: $LastEducation,
        majorOne: $majorOne,
        majorTwo: $majorTwo,
        userId: $userId
      }){
       id
      }
    }
`

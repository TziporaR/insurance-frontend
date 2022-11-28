export interface Policy {
    policyNumber: number;
    productNumber: number;
    insuredId: string;
    insuredFirstName: string;
    insuredLastName: string;
}

export interface PoliciesState {
    selectedId: string;
    loading: boolean;
    policies: Policy[];
}
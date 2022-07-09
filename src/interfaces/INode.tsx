export interface INode<U> {
    value: U
    left: INode<U> | null
    right: INode<U> | null
}
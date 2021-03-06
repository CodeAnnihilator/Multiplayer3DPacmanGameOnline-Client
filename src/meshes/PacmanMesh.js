import React, { Component } from 'react'
import THREE, { Vector3, Euler } from 'three'

export default class PacmanMesh extends Component {
  constructor() {
    super()
    this.state = {
      scale: 0.008,
      positionX: 0,
      positionY: 0,
      rotationX: 1.5,
      rotationY: 0
    }
  }
  componentWillMount() {
    const { positionX, positionY, rotationY } = this.props
    this.setState({ positionX, positionY, rotationY })
  }
  render() {
    const { scale, positionX, positionY, rotationX, rotationY } = this.state
    const renderScale = new Vector3(scale, Math.random() * 0.005 + scale, scale)
    const renderPosition = new Vector3(positionX, positionY, 0)
    const renderRotation = new Euler(rotationX, rotationY, 0)
    return (
      <group>
        <mesh castShadow receiveShadow position={renderPosition} rotation={renderRotation} scale={renderScale}>
          <geometryResource resourceId="treeTrumpGeometry" />
          <materialResource resourceId="treeTexture" />
        </mesh>
        <mesh receiveShadow position={renderPosition}>
          <boxGeometry width={1} height={1} depth={0.01} />
          <materialResource resourceId='groundTexture1' />
        </mesh>
      </group>
    )
  }
}

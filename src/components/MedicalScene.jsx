import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function makeSphere(color, radius = 0.055) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(radius, 18, 18),
    new THREE.MeshBasicMaterial({ color })
  )
}

export default function MedicalScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 100)
    camera.position.set(0, 0, 6)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    group.position.set(-1.75, -0.25, 0)
    scene.add(group)

    const strandMaterial = new THREE.LineBasicMaterial({
      color: 0xb9ffee,
      transparent: true,
      opacity: 0.28,
    })

    for (let i = 0; i < 34; i += 1) {
      const t = i * 0.34
      const y = 2.45 - i * 0.145
      const x1 = Math.sin(t) * 0.42
      const x2 = Math.sin(t + Math.PI) * 0.42
      const z1 = Math.cos(t) * 0.24
      const z2 = Math.cos(t + Math.PI) * 0.24
      const left = makeSphere(i % 2 ? 0xff6f99 : 0xb9ffee)
      const right = makeSphere(i % 2 ? 0xb9ffee : 0xff6f99)
      left.position.set(x1, y, z1)
      right.position.set(x2, y, z2)
      group.add(left, right)

      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x1, y, z1),
        new THREE.Vector3(x2, y, z2),
      ])
      group.add(new THREE.Line(geometry, strandMaterial))
    }

    const stars = 620
    const positions = new Float32Array(stars * 3)
    for (let i = 0; i < stars; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5
    }
    const starGeometry = new THREE.BufferGeometry()
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const starMaterial = new THREE.PointsMaterial({
      color: 0x48f6d2,
      size: 0.012,
      transparent: true,
      opacity: 0.74,
    })
    const starField = new THREE.Points(starGeometry, starMaterial)
    scene.add(starField)

    const resize = () => {
      const { clientWidth, clientHeight } = mount
      renderer.setSize(clientWidth, clientHeight)
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
    }

    let animationFrame = 0
    const clock = new THREE.Clock()
    const animate = () => {
      const elapsed = clock.getElapsedTime()
      group.rotation.y = elapsed * 0.75
      group.rotation.z = Math.sin(elapsed * 0.45) * 0.07
      starField.rotation.y = elapsed * 0.018
      starMaterial.opacity = 0.58 + Math.sin(elapsed * 1.8) * 0.16
      renderer.render(scene, camera)
      animationFrame = requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      mount.removeChild(renderer.domElement)
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose()
        if (object.material) object.material.dispose()
      })
      renderer.dispose()
    }
  }, [])

  return <div className="medical-scene" ref={mountRef} aria-hidden="true" />
}
